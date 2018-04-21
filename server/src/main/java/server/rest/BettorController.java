package server.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import server.model.bettor.Contest;
import server.service.BettorService;

import javax.inject.Inject;
import java.util.List;

@RestController
public class BettorController {

    @Autowired
    private BettorService bettorService;

    @RequestMapping(path = "/api/bettor/contest", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<List<Contest>> getAllPublicContest() {
        return new ResponseEntity<>(this.bettorService.getAllPublicContest(), HttpStatus.OK);
    }

}
