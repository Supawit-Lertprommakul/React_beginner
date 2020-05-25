import axios from 'axios';

export const AxiosBillionaires = async () => {
    try {
      const billionaires = (await axios.get('https://v11v9.sse.codesandbox.io/billionaires')).data;
      return billionaires;
    } catch (error) {}
  }

  // async componentDidMount() {
  //   try {
  //     const response = await fetch('https://v11v9.sse.codesandbox.io/billionaires')
  //     const billionaires = await response.json()
  //     console.log(billionaires);
  //     this.setState({ billionaires })
  //   } catch (error) {}
  // }

  // componentDidMount() {
  //   console.log('hello');
  //   fetch('https://v11v9.sse.codesandbox.io/billionaires')
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(result => {
  //       console.log(result);
  //       this.setState({ billionaires })
  //     })
  // }