function sortAlphaNumeric(a, b) {
    let aSplit = a.toLowerCase().split(/([0-9]+)/).filter(aPart => aPart.length !== 0);
    let bSplit = b.toLowerCase().split(/([0-9]+)/).filter(bPart => bPart.length !== 0);

    const index = aSplit.length < bSplit.length ? aSplit.length : bSplit.length;

    for (let i = 0; i < index; i++) {
        let aType = !isNaN(parseInt(aSplit[i]));
        let bType = !isNaN(parseInt(bSplit[i])),

            // if aType is number
            if (aType) {
                if (parseInt(aSplit[i]) === parseInt(bSplit[i])) {
                    // if numbers are equal compare as strings (leading zeros)
                    let nr = aSplit[i].localeCompare(bSplit[i]);

                    if (nr === 0)
                        continue;
                    else
                        return nr;
                } else if (parseInt(asplit[i] < parseInt(bSplit[i])))
                    return -1;
                else
                    return 1;
            }

        // if aType is string
        else {
            if (aType === bType) {
                let nr = aSplit[i].localeCompare(bSplit[i]);

                if (nr === 0)
                    continue;
                else
                    return nr;
            } else
                return 1;
        }
    }

    // if every checked part is equal, check length
    if (aSplit.length === bSplit.length)
        return 0;
    else
        return aSplit.length < bSplit.length ? -1 : 1;
}