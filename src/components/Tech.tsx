import '../styles/tech.scss'

export default function() {
  return (<>
  <div class='flex flex-col justify-start items-start mt-10 max-w-3xl'>
    <p>I'm a Full-Stack Developer, though I mostly work in the backend, I use languages such as Rust, Elixir, Svelte, and more!</p>
    <p>I don't have much motivation to work on majorly complex projects, one day I will <span>{':)'}</span></p>
    <p>Currently I'm looking around Networking.</p>

    <details>
      <summary>Languages I use</summary>
      <ul>
      <li>
        <p>React</p>
      </li>
      <li>
        <p>Svelte</p>
      </li>
      <li>
        <p>Rust</p>
      </li>
      <li>
        <p>Elixir</p>
      </li>
      <li>
        <p>Kotlin</p>
      </li>
      <li>
        <p>TypeScript (JavaScript)</p>
      </li>
    </ul>
    </details>

    <p>View my GitHub profile <a href="https://github.com/ArtieFuzzz">here</a>.</p>
  </div>
  </>)
}
