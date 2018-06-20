package server.rest;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import server.dto.user.UpdateUserInfoRequest;
import server.model.bettor.Pronostic;
import server.model.user.User;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
public class PlayerResource {
    private final PlayerResourceDelegate playerResourceDelegate;

    public PlayerResource(PlayerResourceDelegate playerResourceDelegate){
        this.playerResourceDelegate = playerResourceDelegate;
    }


    @RequestMapping(path = "/api/player/contest/{contestId}/pronostic", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<List<Pronostic>> getPronosticsByContest(@PathVariable("contestId") Long contestId ,HttpServletRequest request) {
        //return playerResourceDelegate.upadtePronostic(contestId,request);
        return null;
    }

    @RequestMapping(path = "/api/player/contest/{contestId}/pronostic", method = RequestMethod.POST)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<List<Pronostic>> upadtePronostic(@RequestBody List<Pronostic> pronostics, @PathVariable("contestId") Long contestId ,HttpServletRequest request) {
        return playerResourceDelegate.upadtePronostic(pronostics,contestId,request);
    }
}
