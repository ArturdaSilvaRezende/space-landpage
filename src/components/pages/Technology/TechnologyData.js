//Laounch Vehicle
import ImageLaunchVehiclePortrait from "./img/image-launch-vehicle-portrait.jpg";
import ImageLaunchVehicleLandscape from "./img/image-launch-vehicle-landscape.jpg";

//Spaceport
import ImageSpacePortrait from "./img/image-spaceport-portrait.jpg";
import ImageSpaceLandscape from "./img/image-spaceport-landscape.jpg";

//Space Capsule
import ImageSpaceCapsulePortrait from "./img/image-space-capsule-portrait.jpg";
import ImageSpaceCapsuleLandscape from "./img/image-space-capsule-landscape.jpg";

const TechnologyData = [
  {
    id: "Vehicle",
    name: "Launch vehicle",
    images: {
      portrait: ImageLaunchVehiclePortrait,
      landscape: ImageLaunchVehicleLandscape,
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    id: "Spaceport",
    name: "Spaceport",
    images: {
      portrait: ImageSpacePortrait,
      landscape: ImageSpaceLandscape,
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    id: "Capsule",
    name: "Space capsule",
    images: {
      portrait: ImageSpaceCapsulePortrait,
      landscape: ImageSpaceCapsuleLandscape,
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

export default TechnologyData;
