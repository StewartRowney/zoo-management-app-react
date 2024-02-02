import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { Controller, useForm } from "react-hook-form";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useEffect, useState } from "react";
// import NumberFormat from 'react-number-format';
// import { FormControl, Input } from "@mui/material";

const AddZooForm = () => {

    const { control, register, handleSubmit, reset, setError, formState, formState: { errors, isSubmitSuccessful } } 
    = useForm({ defaultValues: { 
        zooName: "",
        location: "",
        visitorCapacity: "",
        ticketPrice: "",
    } });

    const [cleared, setCleared] = useState(false);
    // const [priceState, setPriceState] = useState(0)
    const [submittedData, setSubmittedData] = useState({});
    const onSubmit = data => setSubmittedData(data);
    
    console.log(errors);

    useEffect(() => {
        if (cleared) {
            const timeout = setTimeout(() => {
                setCleared(false);
            }, 1500);

            return () => clearTimeout(timeout);
        }
        return () => { };
    }, [cleared]);

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ ...submittedData });
    }
  }, [formState, submittedData, reset]);

  useEffect(() => {
    setError("zooName", {
      types: {
        required: "This is required",
      },
    })
  }, [setError])

  console.log("isSubmitSuccessful", isSubmitSuccessful);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name of Zoo</label>
                <br></br>
                <input type="text" placeholder="e.g. Cheshire Zoo" {...register("zooName")} />
                {errors.zooName && errors.zooName.types && (
        <p>{errors.zooName.types.required}</p>
      )}
            </div>
            <div>
                <br></br>
                <label>Location of Zoo</label>
                <br></br>
                <input type="text" placeholder="e.g. Cheshire" {...register("location", { required: "Zoo location is a required field" })} />
            </div>
            <div>
                <br></br>
                <label>Visitor Capacity</label>
                <br></br>

                <input type="number" placeholder="e.g. 23000" {...register("visitorCapacity", { required: "Zoo visitor capacity is a required field" })} />
            </div>
            <div>
                <br></br>
                <label>Average ticket price</label>
                <br></br>
                <input type="number" placeholder="e.g. 12.21" {...register("ticketPrice", { 
                    required: "Average Ticket Price is a required field",
                    pattern: {
                        value: /^\d+(,\d{1,2})?$/,
                        message: "invalid price format"
                      }
                    })} />


                {/* <Controller
                    control={control}
                    name="price"
                    {...register('price', {
                        required: 'This is required'
                    })}
                    render={({ field: { onChange, value } }) => (
                        <Input as={NumberFormat}
                            thousandSeparator=','
                            decimalSeparator='.'
                            prefix={'$'}
                            value={value}
                            onChange={onChange}
                            onValueChange={(values) => {
                                const { formattedValue, value } = values;
                                setPriceState(value);
                            }}
                        />
                    )}
                /> */}
            </div>
            <div>
                <br></br>

                <Controller
                    name="startDate"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) =>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Basic date picker"
                                slotProps={{
                                    field: { clearable: true, onClear: () => setCleared(true) },
                                }} />
                        </LocalizationProvider>
                    }
                />

                {/* <label>Date Zoo Opened</label>
                <br></br>
                <input type="datetime" placeholder="Date Zoo Opened" {...register("Date Zoo Opened", {})} /> */}
            </div>
            <div>
                <br></br>
                <input type="Submit" />
      <input type="reset" value="Reset Form" />
            </div>
        </form>
    );
}
export default AddZooForm;
