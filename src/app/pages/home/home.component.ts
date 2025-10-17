import { Component, OnInit } from '@angular/core';
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
})
export class HomeComponent implements OnInit {
    inputValue: string = '';
    inputNumberValue: number = 12;
    includeUppercase: boolean = true;
    includeLowercase: boolean = true;
    includeNumbers: boolean = true;
    includeSymbols: boolean = true;
    includesAll: boolean = true;

    ngOnInit(): void {
        // Generar contraseña inicial
        this.inputValue = this.generateRandomString(this.inputNumberValue);
    }

    public onSliderChange($event: any): void {
        const newLength = $event.value;
        this.updateInputValues(newLength);
    }

    public updateInputValues(length: number): void {
        this.inputNumberValue = length;
        this.inputValue = this.generateRandomString(length);
    }

    private generateRandomString(length: number): string {
        const mayus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const minus = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

        let characters = '';
        if (this.includeUppercase) characters += mayus;
        if (this.includeLowercase) characters += minus;
        if (this.includeNumbers) characters += numbers;
        if (this.includeSymbols) characters += symbols;

        // Si no hay caracteres seleccionados, usar todos
        if (characters.length === 0) {
            characters = mayus + minus + numbers + symbols;
            this.toggleAllCheckboxes(true);
        }

        // Generar la cadena aleatoria de forma más segura
        let result = '';
        const charactersLength = characters.length;
        const randomValues = new Uint32Array(length);
        crypto.getRandomValues(randomValues);
        
        for (let i = 0; i < length; i++) {
            result += characters.charAt(randomValues[i] % charactersLength);
        }

        return result;
    }

    public reloadRandomString(): void {
        this.inputValue = this.generateRandomString(this.inputNumberValue);
    }

    private toggleAllCheckboxes(checked: boolean): void {
        this.includeUppercase = checked;
        this.includeLowercase = checked;
        this.includeNumbers = checked;
        this.includeSymbols = checked;
        this.includesAll = checked;
    }

    public onToggleAll(checked: boolean): void {
        this.toggleAllCheckboxes(checked);
        this.reloadRandomString();
    }

    public onToggleIndividual(): void {
        // Verificar si todos están activados
        const allChecked = this.includeUppercase && this.includeLowercase &&
            this.includeNumbers && this.includeSymbols;

        this.includesAll = allChecked;

        // Si no hay ningún checkbox seleccionado, activar todos
        if (!this.includeUppercase && !this.includeLowercase &&
            !this.includeNumbers && !this.includeSymbols) {
            this.toggleAllCheckboxes(true);
        }

        this.reloadRandomString();
    }

    public copyToClipboard(): void {
        navigator.clipboard.writeText(this.inputValue).then(() => {
            console.log('Contraseña copiada al portapapeles');
            //TODO: poner un toast para el mensaje
        }).catch(err => {
            console.error('Error al copiar:', err);
        });
    }
}