import clientPromise from "../lib/mongodb";

import Piechart from "../components/Piechart";

export default function Winners({ isConnected, users }) {
  var teams = [];
  users.map(({ team1 }) => {
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
        <div className='w-[350px] block text-justify'>
          <table className={`table-auto border-2 mt-12 text-center`}>
            <tr className='border-2'>
              <th className='border-2'>Team Name</th>
              <th className='border-2'>Matches Won</th>
            </tr>
            {entries.map((entry, y) => {
              return (
                <tr className='border-2' key={y}>
                  <td className='border-2'>{entry[0]}</td>
                  <td className='border-2'>{entry[1]}</td>
                </tr>
              );
            })}
          </table>
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
