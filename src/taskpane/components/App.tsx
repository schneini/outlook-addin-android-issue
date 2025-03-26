import * as React from "react";
import { Button, makeStyles } from "@fluentui/react-components";
import { Ribbon24Regular, LockOpen24Regular, DesignIdeas24Regular } from "@fluentui/react-icons";

interface AppProps {
  title: string;
}

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

const App: React.FC<AppProps> = () => {
  const styles = useStyles();
  
  const openDialog = () => {
    Office.context.ui.displayDialogAsync(
      window.location.origin + '/dialog.html',
      {
        width: 40,
        height: 50,
        promptBeforeOpen: false,
      })
  }

  return (
    <div className={styles.root}>
      <Button onClick={openDialog}>Open Dialog</Button>

      does work:
      <select>
          <option>Option A</option>
          <option>Option B</option>
          <option>Option C</option>
      </select>
    </div>
  );
};

export default App;
