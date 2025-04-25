import { LoginUseCase } from "@/app/usecases/auth/login";
import { RegisterUseCase } from "@/app/usecases/auth/register";
import { container } from "@/core/di/container";
import { UserRepository } from "@/domains/repositories/UserRepository";
import { Request, Response } from "express";

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

export const loginController = async (req: Request, res: Response) => {
  /*  
    #swagger.tags = ['Auth']
    #swagger.summary = 'Login a user'
    #swagger.description = 'Endpoint to login a user'
    #swagger.requestBody = {
      required: true,
      content: {
       "application/json": {
          schema: {
            $ref: "#/components/schemas/LoginSchema"
          }
        }
      } 
      }
    }
  */

  try {
    // TODO: Add Validation layer
    const userRepository = container.get<UserRepository>("UserRepository");
    const data = await LoginUseCase(userRepository).execute(req.body);
    res.status(200).json(data);
  } catch (err) {
    // TODO: Add Error Handling layer
    console.log(err);

    res.status(400).json({ message: "Unknown Error" });
  }
};
