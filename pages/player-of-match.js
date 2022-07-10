import Barchart from "../components/Barchart";
import clientPromise from "../lib/mongodb";
import { useState } from "react";

export default function Players({ _isConnected, users }) {
  var players = [];
  users.map(({ player_of_match }) => {
    if (!players.includes(player_of_match)) {
      players.push(player_of_match);
    }
  });
  var obj = {};
  obj = players.reduce((a, v) => ({ ...a, [v]: 0 }), {});
  console.log(obj);

  for (var key of Object.keys(obj)) {
    users.map((user) => {
      if (key === user.player_of_match) {
        obj[key] += 1;
      }
    });
  }
  const entries = Object.entries(obj);

  const data02 = [];
  entries.map((e) => {
    data02.push({ name: e[0], player_of_match: e[1] });
  });
  console.log(data02);
  const [clicked, setClicked] = useState(false);
  const [clickedA, setClickedA] = useState(false);
  return (
    <div className='mt-12 flex flex-col justify-center items-center flex-wrap'>
      <Barchart data={data02} clicked={clicked} />
      <div className='flex gap-8'>
        <button
          onClick={() => setClicked(!clicked)}
          className='mt-2 px-2 transition hover:bg-black hover:text-white border-black border-2'>
          {clicked === false ? "View More" : "View Less"}
        </button>

        <button
          onClick={() => setClickedA(!clickedA)}
          className='mt-2 px-4 transition hover:bg-black hover:text-white border-black border-2'>
          {clickedA === false ? "View All" : "Clear"}
        </button>
      </div>

      <table
        className={`table-auto border-2 mt-12 ${
          clickedA === true ? "block" : "hidden"
        }`}>
        <tr className='border-2'>
          <th className='border-2'>Name</th>
          <th className='border-2'>Player_of_match</th>
        </tr>

        {clickedA === true
          ? data02.map(({ name, player_of_match, id }) => {
              return (
                <tr className='border-2' key={id}>
                  <td className='border-2'>{name}</td>
                  <td className='border-2'>{player_of_match}</td>
                </tr>
              );
            })
          : ""}
      </table>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    await clientPromise;
    const client = await clientPromise;
    const db = client.db("ipl");
    let users = await db.collection("data").find({}).toArray();
    users = JSON.parse(JSON.stringify(users));

    return {
      props: { isConnected: true, users },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}
