/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getGameUrl } from "../../../services/gameService";
import { useParams } from "react-router-dom";
import { Center, Spinner } from "@chakra-ui/react";

const GamePlay = () => {
  const { name } = useParams();
  const [url, setURL] = useState("");
  const [loading, setLoading] =useState(false);
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
    setLoading(true);
    getGameURL().then((res)=>{
      setLoading(false);
    }).catch((err)=>{
      setLoading(false);
    });
  }, []);

  return (
    <>
    {loading ? (
      <Center mt={40}>
         <Spinner
         thickness='4px'
         speed='0.65s'
         emptyColor='gray.200'
         color='blue.500'
         size='xl'
       />
       </Center>
    ): (
      <div style={{ height: "100vh" }}>
      {url && (
        <iframe
          src={url}
          title="Full Page IFrame"
          style={{ width: "100%", height: "100%", border: "none" }}
        />
      )}
    </div>
    )}
  
    </>
  );
};

export default GamePlay;
