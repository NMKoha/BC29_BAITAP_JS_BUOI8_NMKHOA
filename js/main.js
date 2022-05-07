var arrSo = [];
document.querySelector("#btnBaiTap").onclick = function() {
    var so = document.querySelector("#so").value;
    arrSo.push(so);
    document.querySelector("#divInfo").innerHTML = ("Mảng hiện tại: " + arrSo);
    document.querySelector("#tinhTongSoDuong").onclick = function() {
        var tong = 0;
        for (var i = 0; i < arrSo.length; i++) {
            if (arrSo[i] > 0) {
                tong += parseInt(arrSo[i]);
            }
        }
        document.querySelector("#divInfo1").innerHTML = ("Tổng số dương: " + tong);
    };
    document.querySelector("#demSoDuong").onclick = function() {
        var dem = 0;
        for (var i = 0; i < arrSo.length; i++) {
            if (arrSo[i] > 0) {
                dem += 1;
            }
        }
        document.querySelector("#divInfo2").innerHTML = ("Số dương: " + dem);
    };
    document.querySelector("#soNhoNhat").onclick = function() {
        var soNhoNhat = arrSo[0];
        for (var i = 1; i < arrSo.length; i++) {
            if (arrSo[i] < soNhoNhat) {
                soNhoNhat = arrSo[i];
            }
        }
        document.querySelector("#divInfo3").innerHTML = ("Số nhỏ nhất: " + soNhoNhat);
    };
    document.querySelector("#soDuongNhoNhat").onclick = function() {
        var result = false;
        var arrMoi = [];
        for (var i = 0; i < arrSo.length; i++) {
            if (arrSo[i] > 0) {
                arrMoi.push(arrSo[i]);
                result = true;
            }
            console.log(arrMoi);
        };
        if (result == true) {
            var soDuongNhoNhat = arrMoi[0];
            for (var j = 1; j < arrMoi.length; j++) {
                if (arrMoi[j] < soDuongNhoNhat) {
                    soDuongNhoNhat = arrMoi[j];
                }
                console.log(soDuongNhoNhat);
                console.log(arrMoi);
            }
            document.querySelector("#divInfo4").innerHTML = ("Số dương nhỏ nhất: " + soDuongNhoNhat);
        } else {
            document.querySelector("#divInfo4").innerHTML = ("Mảng không có số dương ");
        }
    }
    document.querySelector("#soChanCuoiCung").onclick = function() {
        var result1 = false;
        var arrMoi1 = [];
        for (var i = 0; i < arrSo.length; i++) {
            if (arrSo[i] > 0 && arrSo[i] % 2 === 0) {
                arrMoi1.push(arrSo[i]);
                result1 = true;
            }
            console.log(arrMoi1);
        };
        if (result1 == true) {
            var a = arrMoi1.length;
            var soChan = arrMoi1[(a - 1)];
            console.log(a);
            console.log(soChan);
            document.querySelector("#divInfo5").innerHTML = ("Số chẵn cuối cùng: " + soChan);
        } else {
            document.querySelector("#divInfo5").innerHTML = ("Mảng không có số dương ");
        };
    };
    document.querySelector("#doiCho").onclick = function() {
        var viTri1 = document.querySelector("#viTri1").value;
        var viTri2 = document.querySelector("#viTri2").value;
        var b = arrSo[(viTri1)];
        arrSo[(viTri1)] = arrSo[(viTri2)];
        arrSo[viTri2] = b;
        document.querySelector("#divInfo6").innerHTML = ("Mảng sau khi đổi chỗ: " + arrSo);
    }
    document.querySelector("#sapXep").onclick = function() {

        for (var c = 0; c < arrSo.length; c++) {
            for (var d = 0; d <= arrSo.length; d++) {
                if (arrSo[d] < 0 && arrSo[d + 1] < 0) {
                    if (arrSo[d] < arrSo[(d + 1)]) {
                        var e = arrSo[d];
                        arrSo[(d)] = arrSo[d + 1];
                        arrSo[d + 1] = e;
                    }
                } else {
                    if (arrSo[d] > arrSo[(d + 1)]) {
                        var e = arrSo[d];
                        arrSo[(d)] = arrSo[d + 1];
                        arrSo[d + 1] = e;
                    }
                }

            }
        }


        document.querySelector("#divInfo7").innerHTML = ("Mảng sau sắp xếp: " + arrSo);
    }
    document.querySelector("#timSoNguyenTo").onclick = function() {

        for (var index = 0; index < arrSo.length; index++) {
            var kq = soNguyenTo(parseInt(arrSo[index]));
            if (kq == true) {
                var soNT = arrSo[index];
                break;
            } else {
                var soNT = "Không có số nguyên tố";
            };
        };
        document.querySelector("#divInfo8").innerHTML = ("Số nguyên tố đầu tiên: " + soNT);
    }
    document.querySelector("#soSanh").onclick = function() {
        var dem1 = 0;
        var dem2 = 0;
        for (var i = 0; i < arrSo.length; i++) {
            if (arrSo[i] > 0) {
                dem1 += 1;
            }
            if (arrSo[i] < 0) {
                dem2 += 1;
            }
        };
        if (dem1 == dem2) {
            document.querySelector("#divInfo10").innerHTML = ("Số dương: " + dem1 + "<br/>" + "Số âm: " + dem2 + "<br/>" + "bằng nhau");
        }
        if (dem1 > dem2) {
            document.querySelector("#divInfo10").innerHTML = ("Số dương: " + dem1 + "<br/>" + "Số âm: " + dem2 + "<br/>" + "Số dương nhiều hơn");
        } else {
            document.querySelector("#divInfo10").innerHTML = ("Số dương: " + dem1 + "<br/>" + "Số âm: " + dem2 + "<br/>" + "Số âm nhiều hơn");
        };

    };

};

function soNguyenTo(n) {
    var kq;
    if (n < 2) {
        kq = false;
    } else if (n === 2 || n === 3) {
        kq = true;
    } else {
        for (var i = 2; i < n - 1; i++) {
            if (n % i == 0) {
                kq = false;
                break;
            } else {
                kq = true;
            };
        };
    };
    return kq;
};
var arrSo1 = [];
document.querySelector("#baiTap9").onclick = function() {
    var so1 = document.querySelector("#so1").value;

    arrSo1.push(so1);
    document.querySelector("#arrSoThuc").innerHTML = ("Mảng số thực mới: " + arrSo1);
    document.querySelector("#demSoNguyen").onclick = function() {
        var dem = 0;
        var kq = false;
        for (var i = 0; i < arrSo1.length; i++) {
            var kt = arrSo1[i] * 1;
            kq = Number.isInteger(kt);
            if (kq === true) {
                dem += 1;
            }
        }
        document.querySelector("#divInfo9").innerHTML = ("Số số nguyên: " + dem);
    };
};