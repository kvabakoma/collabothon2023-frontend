import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button'
import { MifiDialogComponent } from '../mifi-dialog/mifi-dialog.component'

@Component({
    selector: 'app-bank-single',
    templateUrl: './bank-single.component.html',
    styleUrls: ['./bank-single.component.css'],
})
export class BankSingleComponent implements OnInit {
    id: any
    hideLoader!: boolean
    bank!: any
    constructor(private route: ActivatedRoute, public dialog: MatDialog) {
        this.hideLoader = true
        this.bank = {
            name: 'Commerzbank',
            type: 'Bank',
            description:
                "Commerzbank AG is a global German universal bank, founded in 1870. With over 15 percent ownership, the Government of Germany is the bank's biggest shareholder.",
            flagPersonalDetails: true,
            flagDocID: true,
            flagDocRent: true,
            flagDocEmployer: true,
        }
    }

    onApply() {
        this.hideLoader = false
        let that = this
        setTimeout(function () {
            that.hideLoader = true
            that.openDialog('0ms', '0ms')
        }, Math.random() * 500 + 750)
    }

    openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
        this.dialog.open(MifiDialogComponent, {
            width: '350px',
            height: '350px',
            enterAnimationDuration,
            exitAnimationDuration,
        })
    }

    ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id')?.toString()
    }
}

