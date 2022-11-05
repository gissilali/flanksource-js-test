import { data } from "./data";
import { useData } from "./hooks/useData";

function App() {
  const standings = useData(data, "2021-05-05T14:00:00");
  console.log({ standings });
  return (
    <>
      <header className="bg-emerald-400 h-16 w-full flex items-center"></header>
      <div className="container mx-auto py-8">
        <div className="overflow-x-auto relative">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6 text-left">
                  Position
                </th>
                <th scope="col" className="py-3 px-6 text-left">
                  Club
                </th>
                <th scope="col" className="py-3 px-6 text-center">
                  Played
                </th>
                <th scope="col" className="py-3 px-6 text-center">
                  Won
                </th>
                <th scope="col" className="py-3 px-6 text-center">
                  Drawn
                </th>
                <th scope="col" className="py-3 px-6 text-center">
                  Lost
                </th>
                <th scope="col" className="py-3 px-6 text-center">
                  GF
                </th>
                <th scope="col" className="py-3 px-6 text-center">
                  GA
                </th>
                <th scope="col" className="py-3 px-6 text-center">
                  Goal Difference
                </th>
                <th scope="col" className="py-3 text-right px-6">
                  Points
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(standings).map((club, index) => (
                <tr
                  key={index}
                  className="bg-white border-b text-left dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="py-4 px-6">{index + 1}</td>
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {club}
                  </th>
                  <td className="py-4 px-6 text-center">
                    {standings[club].played}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {standings[club].wins}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {standings[club].draws}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {standings[club].losses}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {standings[club].losses}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {standings[club].losses}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {standings[club].losses}
                  </td>
                  <td className="py-4 px-6 text-right">
                    {standings[club].points}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
