import {FormGroup, ValidatorFn} from "@angular/forms"

export function datelessthan(firstDateDield: String, secondDateField: String):ValidatorFn{
    return(form: FormGroup): {[ key: String ] : Boolean } | null => {
        const firstDateValue = form.get(eventDate1).value;
        const secondDataValue = from.get(eventDate2).value;

        if(!firstDateValue || !secondDataValue){
            return{missing : true};
        }

        const firstDate = new Date(firstDateValue);
        const secondDate = new Date(secondDataValue);

        if(firstDate.getTime() >= secondDate.getTime()){
            const err = {datelessthan: true};
            return err;
        }

    };
}