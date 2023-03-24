interface DirectorInterface{
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string,
}

interface TeacherInterface{
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string,
}

class Director implements DirectorInterface{
    workFromHome(): string{
        return 'Working from home';
    }
    getCoffeeBreak(): string{
        return 'Getting a coffee break';
    }
    workDirectorTasks(): string{
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface{
    workFromHome(): string{
        return 'Cannot work from home';
    }
    getCoffeeBreak(): string{
        return 'Cannot have a break';
    }
    workTeacherTasks(): string{
        return 'Getting to work';
    }
}

type Employee = Teacher | Director;

function createEmployee(salary: number | string): Employee {
    if (typeof salary === 'number' && salary < 500)
        return new Teacher();
    else
        return new Director();
}


function isDirector(employee: Employee): employee is Director{
    return employee instanceof Director;
}

function executeWork(employee: Employee): void{
    if (isDirector(employee))
        employee.workDirectorTasks();
    else
        employee.workTeacherTasks();
}


type Subject = "Math" | "History";

function teachClass(todayClass: Subject): string{
    return `Teaching ${todayClass}`;
}
