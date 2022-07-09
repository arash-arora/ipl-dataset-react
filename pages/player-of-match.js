import Barchart from "../components/Barchart";
import clientPromise from "../lib/mongodb";

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
    data02.push({ name: e[0], uv: e[1] });
  });
  console.log(data02);
  return (
    <div className='mt-12 flex justify-center items-center flex-wrap'>
      <Barchart data={data02} />
      {/* {players.map((player, id) => {
        return <p key={id}>{player}</p>;
      })} */}
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
