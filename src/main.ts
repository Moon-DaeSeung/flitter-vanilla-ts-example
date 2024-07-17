import "./style.css";
import {
  AppRunner,
  Center,
  Colors,
  Container,
  Text,
  TextStyle,
} from "@meursyphus/flitter";

const MyApp = () => {
  return Container({
    width: 300,
    height: 200,
    color: Colors.blue[500],
    child: Center({
      child: Text("Hello, Flitter!", {
        style: new TextStyle({
          color: Colors.white,
          fontSize: 24,
          fontWeight: "bold",
        }),
      }),
    }),
  });
};

/**
 * canvas style must be set to 100%, 100%
 * and you also must wrap div for canvas in order to calculate the size of the canvas
 */
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div style="width: 100vw; height: 100vh" id="container">
    <canvas style="width: 100%; height: 100%;" id="view" />
  </div>
`;
const app = new AppRunner({
  view: document.querySelector<HTMLCanvasElement>("#view")!,
});
/**
 * you must set resizeTarget to calculate the size of the canvas
 */
app.onMount({
  resizeTarget: document.querySelector<HTMLDivElement>("#container")!,
});

app.runApp(MyApp());
