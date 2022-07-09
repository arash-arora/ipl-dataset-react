import clientPromise from "../lib/mongodb";

import Piechart from "../components/Piechart";

export default function Winners({ isConnected, users }) {
  var teams = [];
  users.map(({ team1, team2 }) => {
    if (!teams.includes(team1)) {
      teams.push(team1);
    }
  });
  var rv = {};
  rv = teams.reduce((a, v) => ({ ...a, [v]: 0 }), {});

  // console.log(rv);
  for (var key of Object.keys(rv)) {
    users.map((user) => {
      if (key === user.winner) {
        rv[key] += 1;
      }
    });
    // console.log(key + " -> " + rv[key]);
  }
  const entries = Object.entries(rv);
  const data01 = [];
  entries.map((e) => {
    data01.push({ name: e[0], value: e[1] });
  });

  return (
    <>
      <div className='flex justify-center items-center flex-wrap'>
        <Piechart data={data01} />
        <div className='w-[300px] block text-justify'>
          {entries.map((entry, y) => {
            return (
              <p
                key={y}
                className='hover:text-red-600 text-justify justify-center flex items-center transition text-md tracking-wide leading-6'>
                {entry[0]} : {entry[1]}
              </p>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}

//Fetching data from database
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
