import '../styles/tech.scss'

export default function() {
  return (<>
  <div class='flex flex-col justify-start items-start mt-10 max-w-3xl'>
    <p>I'm a Full-Stack Developer, though I mostly work in the backend, I use languages such as Rust, Elixir, Svelte, and more!</p>
    <p>I don't have much motivation to work on majorly complex projects, one day I will <span>{':)'}</span></p>
    <p>Currently I'm looking around Networking.</p>

    <p>Experience:</p>
    <ul>
      <li>
        <p>React: <span>~</span> 1 - 2 Years</p>
      </li>
      <li>
        <p>Svelte: <span>~</span> 6 Months</p>
      </li>
      <li>
        <p>Rust: 1<span>+</span> Years</p>
      </li>
      <li>
        <p>Elixir: <span>~</span> 1 Year</p>
      </li>
    </ul>

    <p>View my GitHub profile <a href="https://github.com/ArtieFuzzz">here</a>.</p>
  </div>
  </>)
}
