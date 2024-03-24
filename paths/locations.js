export default function() {
  let operations = {
    GET,
    POST,
  }

  function GET(req, res, next) {}

  function POST(req, res, next) {}


  GET.apiDoc = {
    summary: "Returns list of locations",
    operationId: "getLocations",
    responses: {
      200: {
        description: "List of locations",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                $ref: "#/components/schemas/Location"
              }
            }
          }
        }
      }
    }
  };
  
  POST.apiDoc = {
    summary: "Creates a new location",
    operationId: "createLocation",
    requestBody: {
      content:{
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Location"
          }
        }
      }
    },
    responses: {
      201: {
        description: "Newly created location",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Location"
            }
          }
        }
      }
    }
  };

  return operations;
}