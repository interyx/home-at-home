export default function () {
  let operations = {
    GET,
    PUT,
    DELETE
  };

  function GET(req, res, next) {}

  function PUT(req, res, next) {}

  function DELETE(req, res, next) {}

  GET.apiDoc = {
    summary: "Returns a single location",
    operationId: "getOneLocation",
    parameters: [
      {
        name: "shortId",
        in: "path",
        required: true,
        schema: {
          type: "string"
        }
      }
    ],
    responses: {
      200: {
        description: "Location data",
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

  PUT.apiDoc = {
    summary: "Updates an existing location",
    operationId: "updateLocation",
    parameters: [
      {
        name: "shortId",
        in: "path",
        schema: {
          type: "string"
        },
        required: true,
      }
    ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Location"
          }
        }
      }
    },
    responses: {
      200: {
        description: "Updated location",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Location",
            }
          }
        }
      }
    }
  };

  DELETE.apiDoc = {
    summary: "Deletes an existing location",
    operationId: "deleteLocation",
    parameters: [
      {
        name: "shortId",
        in: "path",
        required: true,
        schema: {
          type: "string",
        }
      }
    ],
    responses: {
      204: {
        description: "No content",
        content: {},
      }
    }
  };

  return operations;
}