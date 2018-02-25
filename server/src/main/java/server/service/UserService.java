package server.service;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import server.model.User;
import server.repository.UserRepository;

import java.util.List;

@Component
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public ResponseEntity<List<User>> getAllUser() {
        List<User> users =  this.userRepository.findAll();
        if (users.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }else
            return new ResponseEntity<>(users,HttpStatus.OK);
    }

    public ResponseEntity<User> getUser(Long id) {
        if (userRepository.exists(id)){
            return new ResponseEntity<User>(userRepository.findOne(id),HttpStatus.OK);
        }else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    public ResponseEntity<Void> deleteUser(Long id) {
        if (userRepository.exists(id)){
            userRepository.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    public ResponseEntity<Void> addUser(User user) {
        if (!userRepository.exists(user.getId())){
            userRepository.save(user);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }else
            return new ResponseEntity<>(HttpStatus.CONFLICT);
    }


}
