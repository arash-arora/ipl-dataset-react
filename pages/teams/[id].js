import clientPromise from "../../lib/mongodb";
import Router, { useRouter } from "next/router";

var id = "";
export default function TeamDetail({ isConnected, users }) {
  const router = useRouter();
  id = router.query.id;
  var t = 0;
  var runs = 0;
  var wickets = 0;
  var dl = 0;
  const compareY = (a, b) => {
    return b.season - a.season;
  };
  users.sort(compareY);
  return (
    <div className='flex mt-10 flex-col justify-center items-center'>
      <h1 className='text-2xl font-bold tracking-wider uppercase animate-bounce'>
        {router.query.id}
      </h1>
      <button
        className='rounded-lg border-2 relative bottom-8 px-2 mt-12'
        onClick={() => {
          window.location.reload(false);
        }}>
        Refresh
      </button>
      {users.length === 0 ? (
        "Loading... Try Refreshing!! "
      ) : (
        <>
          <table className='table-auto border-2 mt-20 px-2'>
            <tr className='border-2'>
              <th className='border-2 px-2'>Season</th>
              <th className='border-2 px-2'>Team1</th>
              <th className='border-2 px-2'>Team2</th>
              <th className='border-2 px-2'>Winner</th>
              <th className='border-2 px-2'>Won by</th>
            </tr>
            {users.map((user, id) => {
              if (router.query.id === user.winner) {
                t += 1;
              }
              if (user.dl_applied === "1") {
                dl += 1;
              }
              if (user.win_by_runs > runs) {
                runs = parseInt(user.win_by_runs);
              }
              if (user.win_by_wickets > wickets) {
                wickets = parseInt(user.win_by_wickets);
              }
              return (
                <tr className='border-2' key={id}>
                  <td className='border-2 px-2'>{user.season}</td>
                  <td className='border-2 px-2'>{user.team1}</td>
                  <td className='border-2 px-2'>{user.team2}</td>
                  <td className='border-2 px-2'>
                    {user.winner ? user.winner : "DL Applied"}
                  </td>
                  <td className='border-2 px-2'>
                    {user.win_by_runs == 0
                      ? user.win_by_wickets + " wickets"
                      : user.win_by_runs + " runs"}
                  </td>
                </tr>
              );
            })}
          </table>
          <p className='text-xl font-bold absolute top-[280px] left-0 right-0'>
            Matches Won : {t} / {users.length} <br />
            Largest Margin by Runs : {runs} &nbsp;|&nbsp; Largest Margin by
            Wicket : {wickets} <br />
            DL Applied : {dl}
          </p>
        </>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  // console.log(id);
  try {
    await clientPromise;
    const client = await clientPromise;
    const db = client.db("ipl");
    let users = await db
      .collection("data")
      .find({ $or: [{ team1: id }, { team2: id }] })
      .toArray();
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
