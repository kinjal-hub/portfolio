import { Box, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"


const SerchBar = () => {
    const[results,setResults] = useState([]);
    const[input,setInput] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [cache, setCache] = useState({})

    const fetchData = async () => {
    if(cache[input]){
        console.log("cache returned" + input)
      setShowResult(cache[input]);
      return;
    }
     console.log("Api call:" + input);
    const data = await fetch("https://dummyjson.com/recipes/search?q=" + input);
    const json = await data.json();
    setResults(json?.recipes);
    setCache((prev) => ({...prev, [input]: json?.recipes}))
  };

  useEffect(() => {
     const timer = setTimeout(fetchData, 300);
       return () => {
        clearTimeout(timer);
       }
  }, [input]);


  return (
    <Box sx={{ display:'flex', flexDirection:"column", alignItems:'center' , width: '100%', py:"20px",  overflowY: 'scroll'}}>
    <TextField sx={{ width: 500}}
    value={input}
    onChange={(e) => setInput(e.target.value)}
    onFocus={() => setShowResult(true)}
    onBlur={() => setShowResult(false)}
>
    </TextField>
      {showResult && (<Box sx={{ width: 490, maxHeight:'400px', overflowY:'auto', border:'1px solid black', px:'5px'}}>
         {results.map((r) => (
            <Typography  key={r.id} sx={{ alignItems: 'left' ,maxwidth:'500px', '&:hover': {color:'#e0ce86',cursor:'pointer'}}} >
            {r.name}
         </Typography>
        ))}
      </Box>)}
    </Box>
    
    
  )
}

export default SerchBar