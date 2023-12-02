const fetchData = async () => {
  try {
    const response = await fetch(
      "http://localhost:3001/src/pages/api/users.js"
    );
    const data = await response.json();
    console.log("User data:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Rufe die Funktion auf, wenn die Komponente montiert wird oder wenn erforderlich
fetchData();

export function Home() {
  return (
    <main class="home">
      <h1 className=" bg-green-300 border-green-600 border-b p-4 m-4 rounded text-slate-700 dark:text-slate-500 text-6xl font-bold text-center underline py-10 px-48">
        Hello world!!!
      </h1>
    </main>
  );
}
