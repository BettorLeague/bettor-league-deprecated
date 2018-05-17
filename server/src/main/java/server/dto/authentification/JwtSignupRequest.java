package server.dto.authentification;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data
@NoArgsConstructor
@AllArgsConstructor
public class JwtSignupRequest{

    private String username;
    private String email;
    private String password;
}
