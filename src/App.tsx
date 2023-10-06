import type { Component } from 'solid-js';
import { AdminApi } from 'apicurio-registry-client';

const adminApi = new AdminApi(configuration);

adminApi.listGlobalRules().then((response) => {
  console.log(response);
})


const App: Component = () => {
  return (
    <p class="text-4xl text-green-700 text-center py-20">Hello tailwind!</p>
  );
};

export default App;
