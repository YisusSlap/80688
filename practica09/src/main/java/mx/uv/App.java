package mx.uv;
import static spark.Spark.*;

import com.google.gson.JsonObject;
/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );

        //fuente:https://gist.github.com/saeidzebardast/e375b7d17be3e0f4dddf
        options("/*",(request,response)->{
            String accessControlRequestHeaders=request.headers("Access-Control-Request-Headers");
            if(accessControlRequestHeaders!=null){
                response.header("Access-Control-Allow-Headers",accessControlRequestHeaders);
            }
        String accessControlRequestMethod=request.headers("Access-Control-Request-Method");
            if(accessControlRequestMethod!=null){
            response.header("Access-Control-Allow-Methods",accessControlRequestMethod);
            }
            return "OK";
        });
        before((request,response)->response.header("Access-Control-Allow-Origin","*"));
    



        get("/", 
            (request, response)-> "<h1>Bienvenidx</h1>"
        );
        get("/hola", 
            (request, response)-> "<h1>Hola mundo</h1>"
        );
        get("/adios", 
            (request, response)-> "<h1>Adios mundo</h1>"
        );
        get("/alumno", 
            (request, response)-> "{'alumno': 'jhon','matricula' : 's001', 'carrera' : 'tc'}"
        );

        post("/alumno", (request, response) -> {
            System.out.println(request.contentLength());
            System.out.println(request.contentType());
            System.out.println(request.contextPath());

            return "hola: "+request.queryParams("nombre");
        });
        get("/tipo-usuario", (req,res)->{
            

            JsonObject oRespuesta = new JsonObject();
            oRespuesta.addProperty("tipousuario", "profesor");
            oRespuesta.addProperty("nombre", req.queryParams("nombre"));
            oRespuesta.addProperty("paterno", req.queryParams("paterno"));
            oRespuesta.addProperty("materno", req.queryParams("materno"));
            

            return oRespuesta;
        });
    }
}
