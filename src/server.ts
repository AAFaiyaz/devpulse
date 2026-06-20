import express, {
  type Application,
  type Request,
  type Response,
} from "express";

const app: Application = express();
const port = 5000;

// in order to get the users input as json
app.use(express.json());
// in order to get the users input as text
app.use(express.text());
// in order to get the users input as urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  //   res.send("Hello World!");
  res.status(200).json({
    message: "Hello World",
    author: "Faiyaz",
  });
});

app.post("/", async (req: Request, res: Response) => {
  //   console.log(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
