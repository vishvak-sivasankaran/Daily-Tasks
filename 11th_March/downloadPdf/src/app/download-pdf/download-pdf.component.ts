import { Component } from '@angular/core';
import { saveAs } from 'file-saver';
import { ApiService } from '../api.service';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-download-pdf',
  templateUrl: './download-pdf.component.html',
  styleUrls: ['./download-pdf.component.css']
})
export class DownloadPdfComponent {
  constructor(private apiService: ApiService) {}

  downloadPDF() {
    this.apiService.getDataFromAPI().subscribe((data: any) => {
      // Generate PDF with data
      const doc = new jsPDF();
      doc.text(JSON.stringify(data), 10, 10); // Adjust the content as needed
      doc.save('data.pdf');
    });
  }
}
