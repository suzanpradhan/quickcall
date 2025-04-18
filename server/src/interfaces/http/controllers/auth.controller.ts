import { Request, Response } from "express";
import { RegisterUseCase } from "server/src/app/usecases/auth/register";
import { container } from "server/src/core/di/container";
import { UserRepository } from "server/src/domains/repositories/UserRepository";

export const registerController = async (req: Request, res: Response) => {
  /*  
    #swagger.tags = ['Auth']
    #swagger.summary = 'Register a new user'
    #swagger.description = 'Endpoint to register a new user'
    #swagger.tags = ['Auth']
    #swagger.summary = 'Register a new user'
    #swagger.description = 'Endpoint to register a new user'
    #swagger.requestBody = {
      required: true,
      content: {
       "application/json": {
          schema: {
            $ref: "#/components/schemas/RegisterSchema"
          }
        }
      } 
      }
    }
  */

  try {
    // TODO: Add Validation layer
    const dto = req.body;
    const userRepository = container.get<UserRepository>("UserRepository");
    const user = await RegisterUseCase(userRepository).execute(dto);
    res.status(201).json({ message: "User Created", user });
  } catch (err) {
    // TODO: Add Error Handling layer
    console.log(err);

    res.status(400).json({ message: "Unknown Error" });
  }
};
