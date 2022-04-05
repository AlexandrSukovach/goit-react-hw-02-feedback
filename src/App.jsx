
import Statistics from 'components/Statistics/Statistics';
import Counter from 'components/Counter/Counter'



export const App = () => {
  return (
    <><div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >goit-react-hw-02-feedback</div>
<Statistics title="Please leave feedback"/>
<Counter/>
    </>
    
  );
}
