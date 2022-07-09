import classes from "./layout.module.css";
import MainNavigation from "./MainNavigation";

export default function Layout(props) {
  return (
    <div>
      <MainNavigation/>
      <main className={classes.container}>
        {props.children}
      </main>
    </div> 
  )
}
