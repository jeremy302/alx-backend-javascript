interface Teacher{
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [obj: string]: any,
}

interface Directors extends Teacher{
    numberOfReports: number,
}

type printTeacherFunction = (firstName: string, lastName: string)=> string;

function printTeacher(firstName: string, lastName: string){
    return `${firstName[0]}. ${lastName}`;
}


interface IStudentClass{
    firstName: string,
    lastName: string,
    workOnHome(): string,
    displayName(): string,
}

class StudentClass implements IStudentClass{
    constructor(public firstName: string, public lastName: string){};
    workOnHome(): string{
        return 'Currently working';
    }
    displayName(): string {
        return this.firstName;
    }
}
