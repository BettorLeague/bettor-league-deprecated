package server.social;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.social.connect.Connection;
import org.springframework.social.connect.ConnectionSignUp;
import org.springframework.social.connect.UserProfile;
import org.springframework.stereotype.Service;
import server.model.user.AuthorityName;
import server.model.user.User;
import server.repository.user.AuthorityRepository;
import server.repository.user.UserRepository;

import java.util.Arrays;

import static java.util.Objects.isNull;
import static org.apache.commons.lang.RandomStringUtils.randomAlphabetic;

@Service
@RequiredArgsConstructor
@Slf4j
public class SocialConnectionSignup implements ConnectionSignUp {


    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthorityRepository authorityRepository;

    @Override
    public String execute(Connection<?> connection) {

        final UserProfile userProfile = connection.fetchUserProfile();

        final String email = userProfile.getEmail();
        final String firstName = userProfile.getFirstName();
        final String lastName = userProfile.getLastName();
        log.info(email+" "+firstName+" "+lastName+" ");
        if (!email.isEmpty()) {
            User user = userRepository.findByEmailOrUsername(email,firstName);
            if (isNull(user)) {
                user = new User();
                user.setUsername(firstName);
                user.setPassword(passwordEncoder.encode(randomAlphabetic(8)));
                user.setEmail(email);
                user.setFirstname(firstName);
                user.setLastname(lastName);
                user.setEnabled(true);
                user.setAuthorities(Arrays.asList(authorityRepository.findByName(AuthorityName.ROLE_USER)));
                userRepository.save(user);
                log.info("New person: {} was successfully Signup by email: {}", user.getUsername(), email);

            } else {
                log.info("Existing person: {} was successfully authenticated by email: {}", user.getUsername(), email);
            }
        } else {
            log.error("Failed to authenticate person with blank email from connection: {}", connection);
        }

        return email;
    }
}
