import { useState, useContext } from "react";
import { ExcelDateToJSDate } from './utils/convert'
import useFetch from "../../hooks/useFetch";
import { SubContext } from "../../context/SubContext";

var xlsx = require("xlsx")
// import XLSX from 'xlsx'


function Upload() {
    const [data, setData] = useState([])
    const {subs} = useContext(SubContext)
    console.log(subs)

    const readUploadFile =  (e) => {
        e.preventDefault();
        // var allActivities = {}
        console.log('here')

        const file = e.target.files[0];
        const reader = new FileReader()
        reader.onload =  (e) => {
            const data = e.target.result
            const workbook = xlsx.read(data)
            const worksheet = workbook.Sheets['Sign In Sheets']
            // console.log(workbook)
            setData(xlsx.utils.sheet_to_json(worksheet))
            // console.log(worksheet.length)

            // console.log(ExcelDateToJSDate(xlsx.utils.sheet_to_json(worksheet)[1]['Date']).toLocaleDateString())

        }
        reader.readAsArrayBuffer(file)
    
        // if (e.target.files) {
        //     const reader = new FileReader();
    
        //     reader.onload = (e) => {
        //         console.log('here')
        //         const data = e.target.result;
        //         const workbook = xlsx.read(data, { type: "array" });
        //         const worksheet = workbook.Sheets['Sign In Sheets']
        //         console.log(xlsx.utils.sheet_to_json(worksheet)[1])
        //         console.log(ExcelDateToJSDate(xlsx.utils.sheet_to_json(worksheet)[1]['Date']).toLocaleDateString())

        //         // console.log(xlsx.utils.sheet_to_json(worksheet)[1]['Time in ']*24)
        //         // console.log(xlsx.utils.sheet_to_json(worksheet)[1]['Time out']*24)
        //         // console.log(xlsx.utils.sheet_to_json(worksheet)[1]['Total Hours']*24)
        //         setData(xlsx.utils.sheet_to_json(worksheet))
        //         // console.log(data[1])


        //         // workbook.SheetNames.forEach((sheet)=>{
        //         //     const worksheet = workbook.Sheets[sheet]
        //         //     console.log(xlsx.utils.sheet_to_json(worksheet))
        //             // allActivities[sheet] = xlsx.utils.sheet_to_json(worksheet)
        //         // })
        //         // setActivityObj(formatUploadObj(allActivities))
        //     };
        //     reader.readAsArrayBuffer(e.target.files[0]);
        // }
    }

    // console.log(data)-
    
    function handleConvert() {
        console.log('heeeeeere')
    }

    const subOptions = subs?.map((sub)=><option key={sub.id} value={sub.name}>{sub.name}</option>)

    return(
        <div>
            <form>
                <label></label>
                <input type='file' onChange={readUploadFile} ></input>
            </form>

            <button onClick={handleConvert}>Convert to CPR Spreadsheet</button>
            <label>sub:</label>
            <select>{subOptions}</select>
            <label>Invoice Month:</label>
            <select>
                <option>September 2022</option>
                <option>October 2022</option>
                <option>November 2022</option>
                <option>December 2022</option>
            </select>
        </div>
    )
}

export default Upload;