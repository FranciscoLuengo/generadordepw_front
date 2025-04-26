import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
    selector: 'app-home',
    imports: [ButtonModule, CardModule, ProgressBarModule, SliderModule, FormsModule, CheckboxModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
    inputValue: string = "";
    inputNumberValue: number = 12;
    includeUppercase: boolean = false;
    includeLowercase: boolean = false;
    includeNumbers: boolean = false;
    includeSymbols: boolean = false;
    includesAll: boolean = true;
    
    constructor() {
        this.generateRandomString(this.inputNumberValue);
    }

    public onSliderChange($event: any) {
        const newLength = $event.value;
        this.updateInputValues(newLength);
       
    }

    public updateInputValues(length: number) {
        this.inputNumberValue = length;
        this.inputValue = this.generateRandomString(length);
        console.log('New values:', { length, value: this.inputValue });
    }

    private generateRandomString(length: number): string {
        const mayus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const minus = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
        let characters = '';
        if (this.includeUppercase) {
            characters += mayus;
            this.includesAll = false
        }
        if (this.includeLowercase){
            characters += minus;
             this.includesAll = false
        } 
            
        if (this.includeNumbers){
            characters += numbers;
             this.includesAll = false
        } 
        if (this.includeSymbols){
            characters += symbols;
             this.includesAll = false
        } 
        if (this.includesAll) {
            characters = mayus + minus + numbers + symbols;
            this.includeUppercase = false;
            this.includeLowercase = false;
            this.includeNumbers = false;
            this.includeSymbols = false;
        }
        if (this.includeUppercase && this.includeLowercase && this.includeNumbers && this.includeSymbols) {
            this.includesAll = true
        }
        if (characters.length === 0) {
            characters = mayus + minus + numbers + symbols;
            this.includesAll = true
        }

        let result = '';
        console.log('characters:', characters);
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        this.inputValue = result;
        return result;
    }
    

    public reloadRandomString () {
        this.generateRandomString(this.inputNumberValue);
    }

    /*
    public calculatePasswordStrength(): number {
        if (!this.inputValue || this.inputValue.length === 0) return 0;

        let strength = 0;
        const length = this.inputValue.length;
        console.log('length:', length);
        // Puntos por longitud
        strength += Math.min(length * 3, 60);
        console.log('strfength:', strength);
        // Puntos por variedad de caracteres
        const hasUpperCase = /[A-Z]/.test(this.inputValue);
        const hasLowerCase = /[a-z]/.test(this.inputValue);
        const hasNumbers = /[0-9]/.test(this.inputValue);
        const hasSymbols = /[^A-Za-z0-9]/.test(this.inputValue);

        const varietyCount = [hasUpperCase, hasLowerCase, hasNumbers, hasSymbols]
            .filter(Boolean).length;

        console.log('varietyCount:', varietyCount);
        strength += varietyCount;

        return Math.min(strength, 100);
    }

    public getPasswordStrengthText(): string {
        const strength = this.calculatePasswordStrength();

        if (strength === 0) return 'Nula';
        if (strength < 5) return 'Débil';
        if (strength < 60) return 'Moderada';
        if (strength < 80) return 'Fuerte';
        return 'Muy Fuerte';
    }
        */

    public copyToClipboard() {
        navigator.clipboard.writeText(this.inputValue).then(() => {
           console.log('Contraseña copiada al portapapeles:', this.inputValue);
        }).catch(err => {
            console.error('Error al copiar:', err);
        });
    }
}