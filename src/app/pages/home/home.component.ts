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
    inputValue: string = "x852*[Q]??Mm";
    inputNumberValue: number = 12;
    includeUppercase: boolean = false;
    includeLowercase: boolean = false;
    includeNumbers: boolean = false;
    includeSymbols: boolean = false;
    includesAll: boolean = true;

    constructor() {
        // Al iniciar, activamos todos los checkboxes porque includesAll es true
        this.toggleAllCheckboxes(true);
        
    }

    public onSliderChange($event: any) {
        const newLength = $event.value;
        this.updateInputValues(newLength);
    }

    public updateInputValues(length: number) {
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

        // Si no hay caracteres seleccionados (no debería pasar porque includesAll inicia en true)
        if (characters.length === 0) {
            characters = mayus + minus + numbers + symbols;
            this.toggleAllCheckboxes(true);
        }

        // Generar la cadena aleatoria
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }

    public reloadRandomString() {
        this.inputValue = this.generateRandomString(this.inputNumberValue);
    }

    // Método auxiliar para activar/desactivar todos los checkboxes
    private toggleAllCheckboxes(checked: boolean) {
        this.includeUppercase = checked;
        this.includeLowercase = checked;
        this.includeNumbers = checked;
        this.includeSymbols = checked;
        this.includesAll = checked;
    }

    // Cuando cambia el checkbox "todos"
    public onToggleAll(checked: boolean) {
        this.toggleAllCheckboxes(checked);
        this.reloadRandomString();
    }

    // Cuando cambia cualquier checkbox individual
    public onToggleIndividual() {
        // Verificar si todos están activados
        const allChecked = this.includeUppercase && this.includeLowercase &&
            this.includeNumbers && this.includeSymbols;

        // Actualizar el estado de "todos"
        this.includesAll = allChecked;

        // Si no hay ningún checkbox seleccionado, activar todos (para evitar estado inválido)
        if (!this.includeUppercase && !this.includeLowercase &&
            !this.includeNumbers && !this.includeSymbols) {
            this.toggleAllCheckboxes(true);
        }

        this.reloadRandomString();
    }

    public copyToClipboard() {
        navigator.clipboard.writeText(this.inputValue).then(() => {
            console.log('Contraseña copiada al portapapeles:', this.inputValue);
        }).catch(err => {
            console.error('Error al copiar:', err);
        });
    }
}