import { Toaster } from 'react-hot-toast'
export default function HotToast() {
  return <Toaster
    position="top-center"
    reverseOrder={false}
    gutter={8}
    containerClassName=""
    containerStyle={{}}
    toastOptions={{
      // Define default options
      className: '',
      duration: 1300,
      style: {
        background: '#111',
        color: '#fff',
        border: '1px solid '
      },

      // Default options for specific types
      success: {
        duration: 1300,
        theme: {
          primary: 'green',
          secondary: 'black',
        },
      },
    }}
  />
}