import express, { Router, Request, Response } from "express";
import { Users } from "../../model/lib/user.model";
import jwt from "../../middleware/jwt";
import config from "../../helper/config";

class UserRoutes {
  getUsers() {
    return (req: Request, res: Response) => {
      Users.find()
        .then(data => {
          res.json(data);
        })
        .catch(error => {
          res.status(400).send({ message: error });
        });
    };
  }

  getUser() {
    return (req: Request, res: Response) => {
      const _id = req.params.id;

      //Users.find(_id) array
      Users.findById(_id) //object
        .then(data => {
          res.json(data);
        })
        .catch(error => {
          res.status(400).send({ message: error });
        });
    };
  }

  addUser() {
    return (req: Request, res: Response) => {
      const { name, account_type, password } = req.body;

      const user = new Users({ name, account_type, password });

      user
        .save()
        .then(data => {
          console.log(data);
          res.json({ data, message: "Added User" });
        })
        .catch(error => {
          res.status(400).send({ message: error });
        });
    };
  }

  updateUser() {
    return (req: Request, res: Response) => {
      const _id = req.params.id;
      const body = req.body;

      Users.findByIdAndUpdate(_id, body)
        .then(data => {
          res.json({ body, message: "Updated User" });
        })
        .catch(error => {
          res.status(400).send({ message: error });
        });
    };
  }

  deleteUser() {
    return (req: Request, res: Response) => {
      const _id = req.params.id;
      const data = req.body;
      Users.findByIdAndDelete(_id)
        .then(data => {
          res.json({ data, message: "Deleted User!" });
        })
        .catch(error => {
          res.status(400).send({ message: error });
        });
    };
  }
  userLogin() {
    return (req: Request, res: Response) => {
      const { name, password } = req.body;

      Users.find({ name, password })
        .then(data => {
          const token = jwt.generateToken({ ...data }, config.SECRET);
          res.json({ token, message: "You're Logged In!" });
        })
        .catch(error => {
          res.status(400).send({ message: error });
        });
    };
  }
}

const router = Router();
const route = new UserRoutes();

router
  .get("", jwt.verifyToken, route.getUsers())
  .post("", route.addUser())
  .post("/login", route.userLogin())
  .delete("/:id", route.deleteUser())
  .get("/:id", route.getUser())
  .patch("/:id", route.updateUser());

export const user = router;
