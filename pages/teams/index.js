import clientPromise from "../../lib/mongodb";
import Link from "next/link";

export default function Teams({ isConnected, users }) {
  var teams = [];
  users.map(({ team1 }) => {
    if (!teams.includes(team1)) {
      teams.push(team1);
    }
  });

  return (
    <div className='mt-12 flex flex-col justify-center items-center flex-wrap'>
      <h1 className='text-3xl mb-2 font-semibold'>Team Wise Stats</h1>
      <p className='mb-8 text-gray-500'>Click any team you want to explore</p>
      <table>
        <tr className='border-2'>
          <th className='border-2'>Team Name</th>
        </tr>
        {teams.map((team) => {
          return (
            <tr className='border-2'>
              <td className='border-2 px-4'>
                <Link href='/teams/[id]' as={`/teams/${team}`}>
                  {team}
                </Link>
              </td>
            </tr>
          );
        })}
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
