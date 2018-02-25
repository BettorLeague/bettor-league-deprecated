package server.rest;

import org.springframework.boot.autoconfigure.web.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletResponse;

@Controller
public class RestErrorController implements ErrorController {


    private static final String ERROR_PATH = "/error";
    private static final String TARGET_PATH = "forward:/";

    @RequestMapping(value = "/error")
    public String error(HttpServletResponse response) {
        if (response.getStatus() == 404 ) return TARGET_PATH;
        else return null;
    }


    @Override
    public String getErrorPath() {
        return ERROR_PATH;
    }
}
