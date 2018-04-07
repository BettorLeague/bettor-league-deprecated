package server.batch;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpRequest;
import org.springframework.http.client.ClientHttpRequestExecution;
import org.springframework.http.client.ClientHttpRequestInterceptor;
import org.springframework.http.client.ClientHttpResponse;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class RestTemplateInterceptor implements ClientHttpRequestInterceptor {


    private final Log logger = LogFactory.getLog(this.getClass());


    @Override
    public ClientHttpResponse intercept(HttpRequest request, byte[] body, ClientHttpRequestExecution execution) throws IOException {
        HttpHeaders headers = request.getHeaders();
        headers.add("X-Auth-Token", "27daafb5ac6742b4a7ab34b2ae44e12a");
        return execution.execute(request, body);
    }

    private void traceRequest(HttpRequest request, byte[] body) throws IOException {
        logger.warn("===========================request begin================================================");
        logger.warn(request.getURI());
        logger.warn(request.getMethod());
        logger.warn(request.getHeaders() );
        logger.warn(new String(body, "UTF-8"));
        logger.warn("==========================request end================================================");
    }

    private void traceResponse(ClientHttpResponse response) throws IOException {
        StringBuilder inputStringBuilder = new StringBuilder();
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(response.getBody(), "UTF-8"));
        String line = bufferedReader.readLine();
        while (line != null) {
            inputStringBuilder.append(line);
            inputStringBuilder.append('\n');
            line = bufferedReader.readLine();
        }
        logger.debug("============================response begin==========================================");
        logger.debug("Status code  : {}"+response.getStatusCode());
        logger.debug("Status text  : {}"+response.getStatusText());
        logger.debug("Headers      : {}"+response.getHeaders());
        logger.debug("Response body: {}"+inputStringBuilder.toString());
        logger.debug("=======================response end=================================================");
    }

}
