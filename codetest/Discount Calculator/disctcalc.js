let x = document.getElementById("calculator");

x.addEventListener("click", function() {

            let amount = Number(document.getElementById("amount").value);
            console.log(amount)
            let percentage = document.getElementById("percentage").value;
            console.log(percentage)
            let disctAmt = amount * (percentage/100);
            let discountTotal = amount - disctAmt;
            let taxConsumptionAmt = discountTotal * (5/100);
            let VATAmt = (discountTotal + taxConsumptionAmt) * (7.5/100);
            let roundingNGN = (42.25);
            let totalBill = (discountTotal + taxConsumptionAmt + VATAmt + roundingNGN);
        
            let discount = document.getElementById("discount");
            let total = document.getElementById("total");
            let taxConsumption = document.getElementById("taxconsumption");
            let VAT = document.getElementById("VATincluded");
            let output = document.getElementById("output");
            
        
            discount.value = disctAmt.toFixed(2);
            total.value = discountTotal.toFixed(2);
            taxConsumption.value = taxConsumptionAmt.toFixed(2);
            VAT.value = VATAmt.toFixed(2);
            output.value = totalBill.toFixed(2);

})
