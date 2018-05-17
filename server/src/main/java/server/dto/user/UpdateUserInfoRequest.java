package server.dto.user;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import server.model.user.UserLevel;
import server.model.user.UserSex;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class UpdateUserInfoRequest {
    private String username;
    private Date birthDate;
    private String country;
    private UserSex sex;
    private Long favoriteTeamId;
    private String quote;
    private UserLevel level;
}
