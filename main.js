import "./style.css";
import * as rive from '@rive-app/canvas'
import { EventType } from '@rive-app/canvas'

const riveCanvas = document.getElementById("rive-canvas")

const r = new rive.Rive({
  src: "ClickBoxTest.riv",
  artboard: "TestArtboard",
  autoplay: true,
  canvas: riveCanvas,
  stateMachines: "State Machine 1",
  onLoad: () => {
    r.resizeDrawingSurfaceToCanvas();
  },
});

window.addEventListener(
  "resize",
  () => {
    r.resizeDrawingSurfaceToCanvas();
  },
  false
);

function onRiveEventReceived(riveEvent) {
  const eventData = riveEvent.data;
  
  console.log("Event name", eventData);
  
}

// Add event listener and provide callback to handle Rive Event
r.on(EventType.RiveEvent, onRiveEventReceived);
// Can unsubscribe to Rive Events at any time via the off() API like below
// r.off(EventType.RiveEvent, onRiveEventReceived);
