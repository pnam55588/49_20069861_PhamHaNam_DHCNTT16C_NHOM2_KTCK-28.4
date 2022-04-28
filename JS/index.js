$(document).ready(function(){

    $("#openmodal").click(function(){
        $("#modal").modal()
    })


    function ktten(){
        let re =/^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/
        let val = $("#ten").val()
        if(val == ""){
            tbten.innerHTML= "không để trống"
            return false
        }
        if(!re.test(val)){
            tbten.innerHTML = "chỉ dùng chữ hoa đầu từ "
            return false
        }
        tbten.innerHTML = "*"
        return true
    }
    $("#ten").blur(ktten)

    function ktsoao(){
        let re =/^[0-9]*$/
        let val = $("#soao").val()
        if(val == ""){
            tbsoao.innerHTML= "không để trống"
            return false
        }
        if(!re.test(val) || val >20 || val<1){
            tbsoao.innerHTML = "chỉ dùng chữ số (số nguyên từ 1 đến 20) "
            return false
        }
        tbsoao.innerHTML = "*"
        return true
    }
    $("#soao").blur(ktsoao)

    function ktclb(){
        let re =/^([A-Z][a-z]*|[0-9])(\s([A-Z][a-z]*|[0-9]))*$/
        let val = $("#clb").val()
        if(val == ""){
            tbclb.innerHTML= "không để trống"
            return false
        }
        if(!re.test(val)){
            tbclb.innerHTML = "Dùng chữ hoa đầu từ và số "
            return false
        }
        tbclb.innerHTML = "*"
        return true
    }
    $("#clb").blur(ktclb)


    function ktngay(){
        let today = new Date()
        let val = new  Date($("#ngay").val())
        today.setDate(today.getDate() + 30)
        if($("#ngay").val()==""){
            tbngay.innerHTML= "không để trống"
            return false
        }
        if(val<today){
            tbngay.innerHTML= "Ngày tập trung sau ngày hiện tại 1 tháng"
            return false
        }
        tbngay.innerHTML= "*"
        return true
    }
    $("#ngay").blur(ktngay)


    function ktsdt(){
        let re =/^0[0-9]{2}-[0-9]{3}-[0-9]{4}$/
        let val = $("#sdt").val()
        if(val == ""){
            tbsdt.innerHTML= "không để trống"
            return false
        }
        if(!re.test(val)){
            tbsdt.innerHTML = "Điện thoại theo mẫu: 0xx-xxx-xxxx "
            return false
        }
        tbsdt.innerHTML = "*"
        return true
    }
    $("#sdt").blur(ktsdt)

    let i  = 0
    $("#luubtn").click(function(){
        if(!ktten() || !ktsoao() || !ktclb() || !ktngay() || !ktsdt()){
            tbluu.innerHTML = "thong tin nhap sai"
            return false
        }
        let hoten = $("#ten").val()
        let soao = $("#soao").val()
        let clb = $("#clb").val()
        let ngay = $("#ngay").val()
        let sdt = $("#sdt").val()
        let anh = $("#img").val()
        
        $("table tbody").append(`
        <tr>
            <td>${i++}</td>
            <td>${hoten}</td>
            <td>${soao}</td>
            <td>${clb}</td>
            <td>${ngay}</td>
            <td>${sdt}</td>
            <td>${anh}</td>
        </tr>
        `)
        tbluu.innerHTML = ""
        $("#modal").modal('toggle')
        return true
    })
})