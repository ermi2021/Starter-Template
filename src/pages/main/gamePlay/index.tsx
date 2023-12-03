/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getGameUrl } from "../../../services/gameService";
import { useParams } from "react-router-dom";

const GamePlay = () => {
  const { name } = useParams();
  const [url, setURL] = useState("");
  async function getGameURL() {
    console.log(name);

    const gameUrl: any = await getGameUrl(name);
    // setURL(gameUrl);
    if (gameUrl?.url && localStorage.getItem("token")) {
      setURL(gameUrl?.url);
    } else {
    }
  }
  useEffect(() => {
    getGameURL();
  }, [name]);

  return (
    <div style={{ height: "100vh" }}>
      {url && (
        <iframe
          src={url}
          title="Full Page IFrame"
          style={{ width: "100%", height: "100%", border: "none" }}
        />
      )}
    </div>
  );
};

export default GamePlay;
