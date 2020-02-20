 var edat = parseInt(prompt("Quants anys tens?"));

        switch (true) {
            case edat < 18:
            document.write("Ets menor d'edat");
                break;
            case edat >= 18:
            document.write("Ets major d'edat");
                break;
            default:
            document.write("Operació no permesa");
                break;
        }