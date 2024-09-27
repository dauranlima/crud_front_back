import { Html5QrcodeScanner } from "html5-qrcode"
import { useEffect } from "react";

export default function Scanner() {

  const [scanResult, setScanResult] = useState(null);
  useEffect(()=>{
  const scanner = new Html5QrcodeScanner('reader', {
    qrbox: {
      width:250,
      height:250,
    },
    fps: 5,
  })

  scanner.render(success, error);

  function success(){
    scanner.clear()
    setScanResult(result)

  }

  function error() {
    console.log(error)
  }

  },[])

  return (
    <div>
      { scanResult 
      ?
      <div>Success:
        <a href={"http://"+scanResult}>{scanResult}</a>
      </div>  
      :
      <div id="reader"></div>
      }

      <h1>QR Code Scanner</h1>
      <div id="reader"></div>
    </div>
  )
}
