export interface MajorCredits{
    credits: number,
    _$brand: 'MajorCredits',
}

export interface MinorCredits{
    credits: number,
    _$brand: 'MinorCredits',
}


export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits{
    return {credits: subject1.credits + subject1.credits} as MajorCredits;
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits{
    return {credits: subject1.credits + subject1.credits} as MinorCredits;
}
